import requests
import msal
import sys
import json
import ast # abstract syntax tree
#from flask import flask, render_template, json


app_id = '448d93ce-d1b7-45aa-842e-d933d7ecd7fc'
tenant_id = '830138cc-a829-4041-926e-dea50549d68b'

username = 'liu.zihui@tiongseng.onmicrosoft.com'
password = 'Tiong8eng'

authority_url = 'https://login.microsoftonline.com/' + tenant_id
scopes = ['https://analysis.windows.net/powerbi/api/.default']

# step 1. generate powerbi access token
client = msal.PublicClientApplication(app_id, authority=authority_url)
response = client.acquire_token_by_username_password(username=username, password=password, scopes=scopes)


access_id = response.get('access_token')
newaccess_id = str(access_id)
print(newaccess_id)

#def function_name(token):
#    return newaccess_id
#greeting = function_name('greeting')
#print(greeting)



# Step 2.
endpoint = 'https://api.powerbi.com/v1.0/myorg/groups'  
headers = {
    'Authorization': f'Bearer ' + access_id
}


response_request = requests.get(endpoint, headers=headers)
if response_request.status_code == 200 :
    result = response_request.json()
    for item in result['value']:
        print(item['name'])
        
#app = flask(__name__)
#@app.route('/')

#def get_token():
#    client = msal.PublicClientApplication(app_id, authority=authority_url)
#    response = client.acquire_token_by_username_password(username=username, password=password, scopes=scopes)
#    access_id2 = response.get('access_token')
#    #newaccess_id = {access_id}
    
#    result = {"myid":access_id2}
    
#    res = json.dumps(result)
    