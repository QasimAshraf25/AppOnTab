function Generate() 
{
		var YOUR_APP_ID = document.getElementById('appid').value;
		var YOUR_URL = document.getElementById('url').value;
		window.location.href ="http://www.facebook.com/dialog/pagetab?app_id="+YOUR_APP_ID+"&next="+YOUR_URL;
}