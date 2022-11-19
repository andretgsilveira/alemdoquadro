import requests

def testAPI():
    try:
        content = requests.get('http://web:5000/api')
        print(content.status_code)
    except:
        print("Falha")
testAPI()