# Generated by Django 2.2.4 on 2019-10-11 13:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0010_auto_20191004_2055'),
    ]

    operations = [
        migrations.RenameField(
            model_name='response',
            old_name='author',
            new_name='author_name',
        ),
    ]
