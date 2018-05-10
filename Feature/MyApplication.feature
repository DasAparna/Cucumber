Feature: Test automationpractice smoke scenario
@newUSer
Scenario: Test login with valid credentials
	Given Open chrome and start application
	When user clicks on signin
	Then user enters user
	Then user should be able to login successfully
	@user
Scenario: personal information page
	Given user is on personal information page
	When user enters valid gender
	And user enters valid fname "Aparna" 
	And user enters valid lname "Das"
	And user enters valid "ap123"
	And user selects "4" in day drop down
	And user selects "5" in month drop down
	And user selects "2001" in year drop down 
	And user enters fname "Apar"
	And user enters lname "das"
	And user enters comp "TechM"
	And user enters "london" in address1
	And user enters "acsd" in address2
	And user enters "USA" in city
	And user enters "5" in state
	And user enters "00000" in zip
	And user enters "1234567893" in phone number
	And user enters "aps" in alias
	Then user should be able to register successfully
	
	




			