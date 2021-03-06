# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-01-27 11:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0009_auto_20170127_1100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='participant',
            name='age',
            field=models.CharField(choices=[('18', '18 - 24'), ('25', '25 - 34'), ('35', '35 - 44'), ('45', '45 - 54'), ('55', '55 - 64'), ('65', '65+')], max_length=2, null=True),
        ),
        migrations.AlterField(
            model_name='participant',
            name='living_now',
            field=models.CharField(choices=[(True, 'Yes'), (False, 'No')], max_length=3, null=True),
        ),
    ]
