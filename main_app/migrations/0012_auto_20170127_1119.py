# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-01-27 11:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0011_auto_20170127_1118'),
    ]

    operations = [
        migrations.AlterField(
            model_name='participant',
            name='living_now',
            field=models.CharField(choices=[(True, 'Yes'), (False, 'No')], max_length=3, null=True),
        ),
    ]
