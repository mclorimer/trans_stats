from django.shortcuts import render
from django.views.generic import View

class IndexView(View):
	
	def get(self, request):
		return render(request, 'trans_stats/index.html')

def homeView(request):
	return render(request, 'trans_stats/welcome.html')
