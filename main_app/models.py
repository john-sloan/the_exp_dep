from django.db import models
from django.contrib.auth.models import User
import pycountry
import os
import csv
from django.conf import settings
from django.contrib.auth.models import User

class Participant(models.Model):
    person = models.ForeignKey(User, null=True)
    country_options = sorted([(country.alpha_2, country.name) for country in list(pycountry.countries)], key=lambda c: c[1])
    with open(os.path.join(settings.BASE_DIR, 'main_app/static/main_app/mery_imgs/Languages.csv'), 'r') as f:
        reader = csv.reader(f)
        pre_language_options = [(row[1], row[0]) for row in reader] + [('CC', 'Chinese (Cantonese)'), ('OO', ' Other')]
        language_options = sorted(pre_language_options, key=lambda c: c[1])
    age_options = [('18', '18 - 24'), ('25', '25 - 34'), ('35', '35 - 44'), ('45', '45 - 54'), ('55', '55 - 64'), ('65', '65+')]
    living_now_options = [('yes', 'yes'), ('no', 'no')]
    years_in_esc_options = [('0', 'never'), ('1', '1 - 12 months'), ('2', '1 - 2 years'), ('3', '3 - 4'), ('5', 'more than 5 years')]
    english_level_options = [('6', 'high advanced'), ('5', 'low advanced'), ('4', 'high intermediate'), ('3', 'low intermediate'), ('2', 'high beginner'), ('1', 'low beginner')]
    living_now_choices = [(True, 'Yes'), (False, 'No')]
    country = models.CharField(max_length=2, choices=country_options, blank=False, null=True)
    language = models.CharField(max_length=2, choices=language_options, blank=False, null=True)
    age = models.CharField(max_length=2, choices=age_options, blank=False, null=True)
    living_now = models.CharField(max_length=3, choices=living_now_choices, blank=True, null=True)
    years_in_esc = models.CharField(max_length=1, choices=years_in_esc_options, blank=True, null=True)
    english_level = models.CharField(max_length=1, choices=english_level_options, blank=True, null=True)

class NoConsent(models.Model):
    reason = models.CharField(max_length=500, blank=True)
    when = models.DateTimeField(auto_now_add=True)

class EnglishTest(models.Model):
    person = models.ForeignKey(User)
    answers = models.CharField(max_length=15)

class Sentence(models.Model):
    person = models.ForeignKey(User, null=True)
    s1 = models.CharField(max_length=300, blank=True, null=True, default='')
    s2 = models.CharField(max_length=300, blank=True, null=True, default='')
    s3 = models.CharField(max_length=300, blank=True, null=True, default='')
    s3_expression = models.CharField(max_length=1, blank=True, null=True, default=None)
    s3_reason = models.CharField(max_length=1, blank=True, null=True, default=None)
    s4 = models.CharField(max_length=300, blank=True, null=True, default='')
    s5 = models.CharField(max_length=300, blank=True, null=True, default='')
    s5_expression_change = models.CharField(max_length=1, blank=True, null=True, default=None)
    s6 = models.CharField(max_length=300, blank=True, null=True, default='')
    s6_expression_change = models.CharField(max_length=1, blank=True, null=True, default=None)