## Browser Support

- Google Chrome (Chromium)
- Mozilla Firefox

## Automated Test cases

```gherkin
Feature: User Registration
  As a new user
  I want to register an account on Automation Exercise
  So that I can access logged-in features

  Scenario: Successful user registration and account deletion
    Given I am on the Automation Exercise home page
    When I click on "Signup / Login" button
    Then I should see "New User Signup!" is visible
    When I enter name and email address and click "Signup" button
    Then I should see "ENTER ACCOUNT INFORMATION" is visible
    When I fill details: Title, Name, Email, Password, Date of birth, and select checkboxes
    And I fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    And I click "Create Account" button
    Then I should see "ACCOUNT CREATED!" is visible
    When I click "Continue" button
    Then I should see "Logged in as username" is visible
    When I click "Delete Account" button
    Then I should see "ACCOUNT DELETED!" is visible
```
