from django.conf.urls import url
from . import views

app_name='main_app'
urlpatterns = [
    url(r'^$', views.welcome, name='welcome'),
    url(r'^insa', views.insa, name='insa'),
    url(r'^consent/', views.consent, name='consent'),
    url(r'^demographics/', views.demographics, name='demographics'),
    url(r'^test/', views.test, name='test'),
    url(r'^test_submission/', views.test_submission, name='test_submission'),
    url(r'^faces_intro/', views.faces_intro, name='faces_intro'),
    url(r'^faces/', views.faces, name='faces'),
    url(r'^get_analysed_text/', views.get_analysed_text, name='get_analysed_text'),
    url(r'^get_ans_to_qs/', views.get_ans_to_qs, name='get_ans_to_qs'),
    url(r'^log_in/', views.log_in, name='log_in'),
    url(r'^debriefing/', views.debriefing, name='debriefing'),
    url(r'^no_consent_debriefing/', views.no_consent_debriefing, name='no_consent_debriefing'),
    url(r'^logout/$', views.logout_view, name='logout_view'),
    url(r'^bibo/', views.bibo, name='bibo'),
]