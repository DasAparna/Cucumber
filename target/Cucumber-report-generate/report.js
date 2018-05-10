$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test automationpractice smoke scenario",
  "description": "",
  "id": "test-automationpractice-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-automationpractice-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@newUSer"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on signin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters user",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyApplicationTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 35323243360,
  "status": "passed"
});
formatter.match({
  "location": "MyApplicationTest.user_clicks_on_signin()"
});
formatter.result({
  "duration": 22437393287,
  "status": "passed"
});
formatter.match({
  "location": "MyApplicationTest.user_enters_user()"
});
formatter.result({
  "duration": 5280433599,
  "status": "passed"
});
formatter.match({
  "location": "MyApplicationTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 20139579254,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "personal information page",
  "description": "",
  "id": "test-automationpractice-smoke-scenario;personal-information-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@user"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on personal information page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters valid gender",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters valid fname \"Aparna\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters valid lname \"Das\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters valid \"ap123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user selects \"4\" in day drop down",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects \"5\" in month drop down",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user selects \"2001\" in year drop down",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters fname \"Apar\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters lname \"das\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters comp \"TechM\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters \"london\" in address1",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters \"acsd\" in address2",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user enters \"USA\" in city",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters \"5\" in state",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enters \"00000\" in zip",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user enters \"1234567893\" in phone number",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters \"aps\" in alias",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user should be able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyApplicationTest.user_is_on_personal_information_page()"
});
formatter.result({
  "duration": 57531270,
  "status": "passed"
});
formatter.match({
  "location": "MyApplicationTest.user_enters_valid_gender()"
});
formatter.result({
  "duration": 53158126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aparna",
      "offset": 25
    }
  ],
  "location": "MyApplicationTest.user_enters_valid_fname(String)"
});
formatter.result({
  "duration": 172210563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Das",
      "offset": 25
    }
  ],
  "location": "MyApplicationTest.user_enters_valid_lname(String)"
});
formatter.result({
  "duration": 113324155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ap123",
      "offset": 19
    }
  ],
  "location": "MyApplicationTest.user_enters_valid(String)"
});
formatter.result({
  "duration": 139806936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "MyApplicationTest.user_selects_in_day_drop_down(String)"
});
formatter.result({
  "duration": 193035669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "MyApplicationTest.user_selects_in_month_drop_down(String)"
});
formatter.result({
  "duration": 193674914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2001",
      "offset": 14
    }
  ],
  "location": "MyApplicationTest.user_selects_in_year_drop_down(String)"
});
formatter.result({
  "duration": 149494532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apar",
      "offset": 19
    }
  ],
  "location": "MyApplicationTest.user_enters_fname(String)"
});
formatter.result({
  "duration": 127317687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "das",
      "offset": 19
    }
  ],
  "location": "MyApplicationTest.user_enters_lname(String)"
});
formatter.result({
  "duration": 109522669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TechM",
      "offset": 18
    }
  ],
  "location": "MyApplicationTest.user_enters_comp(String)"
});
formatter.result({
  "duration": 137767620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 13
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "MyApplicationTest.user_enters_in_address(String,int)"
});
formatter.result({
  "duration": 125512094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acsd",
      "offset": 13
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "MyApplicationTest.user_enters_in_address(String,int)"
});
formatter.result({
  "duration": 65036826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 13
    }
  ],
  "location": "MyApplicationTest.user_enters_in_city(String)"
});
formatter.result({
  "duration": 126965403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "MyApplicationTest.user_enters_in_state(String)"
});
formatter.result({
  "duration": 432162656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000",
      "offset": 13
    }
  ],
  "location": "MyApplicationTest.user_enters_in_zip(String)"
});
formatter.result({
  "duration": 184139481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567893",
      "offset": 13
    }
  ],
  "location": "MyApplicationTest.user_enters_in_phone_number(String)"
});
formatter.result({
  "duration": 177513312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aps",
      "offset": 13
    }
  ],
  "location": "MyApplicationTest.user_enters_in_alias(String)"
});
formatter.result({
  "duration": 150675984,
  "status": "passed"
});
formatter.match({
  "location": "MyApplicationTest.user_should_be_able_to_register_successfully()"
});
formatter.result({
  "duration": 8941037321,
  "status": "passed"
});
});