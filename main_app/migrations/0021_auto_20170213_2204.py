# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-02-13 22:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0020_auto_20170213_2143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sentence',
            name='s1',
            field=models.CharField(blank=True, default='', max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s2',
            field=models.CharField(blank=True, default='', max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s3',
            field=models.CharField(blank=True, default='', max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s3_expression',
            field=models.CharField(blank=True, default=None, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s3_reason',
            field=models.CharField(blank=True, default=None, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s4',
            field=models.CharField(blank=True, default='', max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s5',
            field=models.CharField(blank=True, default='', max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s5_expression_change',
            field=models.CharField(blank=True, default=None, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s6',
            field=models.CharField(blank=True, default='', max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='s6_expression_change',
            field=models.CharField(blank=True, default=None, max_length=1, null=True),
        ),
    ]
