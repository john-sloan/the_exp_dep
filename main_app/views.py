from django.shortcuts import render, redirect
import random
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Participant, NoConsent, EnglishTest, Sentence
from django.http import JsonResponse
from .forms import AllParticipantForm, NonNativeParticipantForm
from django.contrib.auth.decorators import login_required
import language_check

tool = language_check.LanguageTool('en-US')

def all_done(request):
    all_done = False
    try: 
        user = request.user
        try: 
            sentence_object = Sentence.objects.get(person=user)
            if sentence_object.s6 != '':
                all_done = True
        except:
            pass
    except:
        pass
    return all_done

def welcome(request):
    a_d = all_done(request)
    context = {
        "a_d": a_d,
    }
    return render(request, 'welcome.html', context)

def insa(request):
    a_d = all_done(request)
    context = {
        "a_d": a_d,
    }
    return render(request, 'insa.html', context)

def consent(request):
    # import code
    # code.interact(local=locals())
    a_d = all_done(request)
    if request.method == "POST":
        if "reason for leaving" in request.POST:
            given_reason = request.POST['typed_reason']
            NoConsent.objects.create(reason=given_reason)
            return redirect('main_app:no_consent_debriefing')

    context = {
        "a_d": a_d,
    }
    return render(request, 'consent.html', context)

def create_username(request, name):
    u = User.objects.create_user(name, email=None)
    login(request, u)
    user = u.username
    return user

def log_in(request):
    all_usernames = [i.username for i in User.objects.all()]
    unique_name = False
    while unique_name != True:
        name = random.randint(1, 999999)
        if name not in all_usernames:
            user = create_username(request, name)
            unique_name = True
    response_data = {'user': user }
    return JsonResponse(response_data) 

@login_required(login_url='/')
def demographics(request):
    # import code
    # code.interact(local=locals())
    a_d = all_done(request)
    user = request.user
    if request.method == 'POST':
        a_p_form = AllParticipantForm(request.POST)
        p = a_p_form.save(commit=False)
        if request.POST['language'] != 'EN':
            p.living_now = request.POST['living_now']
            p.years_in_esc = request.POST['years_in_esc']
            p.english_level = request.POST['english_level']
        p.person = user
        p.save()
        return redirect('main_app:test')
    a_p_form = AllParticipantForm(label_suffix='')
    n_n_p_form = NonNativeParticipantForm(label_suffix='')
    username = user.username
    context = {
        "a_d": a_d,
        'a_p_form': a_p_form,
        'n_n_p_form': n_n_p_form,
        'username': username,
    }
    return render(request, 'demographics.html', context)

@login_required(login_url='/')
def test(request):
    # import code
    # code.interact(local=locals())
    a_d = all_done(request)
    user = request.user
    person = Participant.objects.get(person=user)
    context = {
        "a_d": a_d,
    }
    return render(request, 'test.html', context)

def test_submission(request):
    user = request.user
    answers = request.GET['answers']
    test_object = EnglishTest.objects.create(person=user, answers=answers)
    response_data = {

    }
    return JsonResponse(response_data)

@login_required(login_url='/')
def faces_intro(request):
    a_d = all_done(request)
    context = {
        "a_d": a_d,
    }
    return render(request, 'faces_intro.html', context)

@login_required(login_url='/')
def faces(request):
    a_d = all_done(request)
    user = request.user
    sentence = 0
    try:
        sentences_object = Sentence.objects.get(person=user)
        if sentences_object.s6 != '':
            return redirect('main_app:debriefing')
        elif sentences_object.s2 == '':
            sentence = 1
        elif sentences_object.s3 == '':
            sentence = 2
        elif sentences_object.s4 == '':
            sentence = 3
        elif sentences_object.s5 == '':
            sentence = 4
        elif sentences_object.s6 == '':
            sentence = 5
    except Sentence.DoesNotExist:
        sentence = 0
    context = {
        "a_d": a_d,
        "sentence": str(sentence),
    }
    return render(request, 'faces.html', context)

def get_analysed_text(request):
    # import code
    # code.interact(local=locals())
    user = request.user
    sent_no = int(request.GET['sentence_no'])
    get_text = request.GET['sentence'].capitalize()
    matches = tool.check(get_text)
    sent_len = len(get_text.split())
    good_sentence = True
    if sent_len < 3 or len(matches) > sent_len // 2:
        good_sentence = False
    else:
        if sent_no == 0:
            try:
                sentences_object = Sentence.objects.get(person=user)
                sentences_object.delete()
                sentences_object = Sentence.objects.create(person=user, s1="REPEAT: " + get_text)
            except Sentence.DoesNotExist:
                sentences_object = Sentence.objects.create(person=user, s1=get_text, s2='', s3='', s4='', s5='', s6='')
        else: 
            sentences_object = Sentence.objects.get(person=user);
            if sent_no == 1:
                sentences_object.s2 = get_text
            elif sent_no == 2:
                sentences_object.s3 = get_text
            elif sent_no == 3:
                sentences_object.s4 = get_text
            elif sent_no == 4:
                sentences_object.s5 = get_text
            elif sent_no == 5:
                sentences_object.s6 = get_text
            sentences_object.save()
    response_data = {
        'sent_len': sent_len,
        'good_sentence': good_sentence,
    }
    return JsonResponse(response_data)

def get_ans_to_qs(request):
    user = request.user
    sent_no = request.GET['sentence_no']
    try:
        sentence_object = Sentence.objects.get(person=user)
        if sent_no == '3':
            sentence_object.s3_expression = request.GET['ans31']
            sentence_object.s3_reason = request.GET['ans32']
        elif sent_no == '5':
            sentence_object.s5_expression_change = request.GET['ans51']
        elif sent_no == '6':
            sentence_object.s6_expression_change = request.GET['ans61']
        sentence_object.save()
    except Sentence.DoesNotExist:
        pass
    return JsonResponse({"success": 'success'})




@login_required(login_url='/')
def debriefing(request):
    context = {

    }
    return render(request, 'debriefing.html', context)

def no_consent_debriefing(request):
    context = {

    }
    return render(request, 'no_consent_debriefing.html', context)

def logout_view(request):
    logout(request)
    return redirect('main_app:welcome')


def bibo(request):
    context = {

    }
    return render(request, 'bibo.html', context)





