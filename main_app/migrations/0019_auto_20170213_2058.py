# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-02-13 20:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0018_sentence'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sentence',
            name='s3_expression_change',
        ),
        migrations.AddField(
            model_name='sentence',
            name='s6_expression_change',
            field=models.CharField(choices=[('1', 'Yes'), ('0', 'No'), ('2', "don't know")], default=None, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s3_expression',
            field=models.CharField(choices=[('0', 'happy'), ('1', 'angry'), ('2', 'thoughtful'), ('3', 'confused'), ('4', "I don't know")], default=None, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s3_reason',
            field=models.CharField(choices=[('0', 'my sentence was boring'), ('1', 'there was a grammar/vocabulary mistake in my sentence'), ('2', 'it was too long'), ('3', 'it was too short'), ('4', "I don't know")], default=None, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s5_expression_change',
            field=models.CharField(choices=[('1', 'Yes'), ('0', 'No'), ('2', "don't know")], default=None, max_length=1, null=True),
        ),
    ]
