Feature: Test Search Feature

    Testing search feature
    in website zero.webappsecurity

    Scenario: Searching word "Bank"
        Given I login and should see homepage
        When I input word "Bank" in search form
        Then I see the result of word "Bank"
