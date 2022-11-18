import requests

def testAPI():
    try:
        content = requests.get('http://localhost:5000/api')
        print(content.status_code)
    except:
        print("Falha")
testAPI()