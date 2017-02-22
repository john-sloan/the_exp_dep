from django import forms
from .models import Participant
from django.forms import RadioSelect, Select
from django.utils.safestring import mark_safe


class AllParticipantForm(forms.ModelForm):

    class Meta:
        model = Participant
        fields = ['country', 'age', 'language']
        labels = {
            'country': mark_safe("Where are you from?<br/><p>"),
            'language': mark_safe("What is your native language?<br/><p>"),
            'age': mark_safe("How old are you?<br/><p>"),
        }

class NonNativeParticipantForm(forms.ModelForm):

    class Meta:
        model = Participant
        fields = ['living_now', 'years_in_esc', 'english_level']
        labels = {
            'living_now': mark_safe("Do you live in an English speaking country now?<br/><p>"),
            'years_in_esc': mark_safe("How long have you lived in an English speaking country?<br/><p>"),
            'english_level': mark_safe("What is your English level?<br/><p>"),
        }