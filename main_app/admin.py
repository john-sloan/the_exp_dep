from django.contrib import admin

from .models import Participant, NoConsent, EnglishTest, Sentence

class NoConsentAdmin(admin.ModelAdmin):
    list_display = ('when', 'reason',)

class ParticipantAdmin(admin.ModelAdmin):
    list_display = ('person', 'language', 'country')

admin.site.register(Participant, ParticipantAdmin)
admin.site.register(NoConsent, NoConsentAdmin)
admin.site.register(EnglishTest)
admin.site.register(Sentence)