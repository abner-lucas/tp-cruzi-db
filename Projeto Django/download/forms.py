from django import forms


class DownloadForm(forms.Form):
    post = forms.CharField()

