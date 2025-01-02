export const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "title": "First Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question3",
            "title": "Last Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question2",
            "title": "Email",
            "isRequired": true,
            "inputType": "email"
          },
          {
            "type": "text",
            "name": "question4",
            "title": "Phone",
            "inputType": "tel"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question5",
            "title": "Do you own a car?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Yes"
              },
              {
                "value": "Item 2",
                "text": "No"
              }
            ]
          },
          {
            "type": "dropdown",
            "name": "question6",
            "visibleIf": "{question5} = 'Item 1'",
            "title": "What car brand do you own?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Toyota"
              },
              {
                "value": "Item 2",
                "text": "BMW"
              },
              {
                "value": "Item 3",
                "text": "Honda"
              }
            ]
          },
          {
            "type": "text",
            "name": "question7",
            "visibleIf": "{question5} = 'Item 1'",
            "title": "How many kilometers do you drive per month?",
            "inputType": "number"
          },
          {
            "type": "radiogroup",
            "name": "question8",
            "visibleIf": "{question5} = 'Item 1'",
            "title": "Do you travel frequently for work?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Yes"
              },
              {
                "value": "Item 2",
                "text": "No"
              }
            ]
          },
          {
            "type": "checkbox",
            "name": "question9",
            "visibleIf": "{question8} = 'Item 1'",
            "title": "Which mode of transportation do you prefer?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Flight"
              },
              {
                "value": "Item 2",
                "text": "Train"
              },
              {
                "value": "Item 3",
                "text": "Car"
              },
              {
                "value": "Item 4",
                "text": "Bus"
              }
            ]
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "rating",
            "name": "question10",
            "title": "The survey was easy to understand\r\n",
            "isRequired": true
          },
          {
            "type": "rating",
            "name": "question12",
            "title": "The survey was easy to understand\r\n",
            "isRequired": true
          },
          {
            "type": "file",
            "name": "question11",
            "title": "Upload a photo of your car or a travel ticket\n"
          },
          {
            "type": "comment",
            "name": "question13",
            "title": "Do you have any additional feedback?"
          }
        ]
      }
    ]
  }
  
  