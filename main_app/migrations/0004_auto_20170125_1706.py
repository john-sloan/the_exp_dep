# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-01-25 17:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0003_auto_20170125_1705'),
    ]

    operations = [
        migrations.AlterField(
            model_name='participant',
            name='living_now',
            field=models.NullBooleanField(choices=[(True, 'Yes'), (False, 'No')], default=None),
        ),
    ]
