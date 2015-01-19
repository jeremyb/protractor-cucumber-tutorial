Feature: Use the shopping cart
  In order to select products in my shopping cart
  As a visitor
  I want to be able to view products and add them to my shopping cart

  Scenario: Seeing empty cart
    Given I am on the homepage
    Then the sidebar with the summary cart should contains no items
    And I should see "Your cart is empty" in the sidebar

  Scenario: Adding a product to my shopping cart
    Given I am on the homepage
    Then I should see 3 products

  Scenario: Adding a product to my shopping cart
    Given I am on the homepage
    Then I follow the product link "OAuth2 in 8 Steps"
    Then I should see the product detail page
    And I click to the add to cart button
    Then I should see "OAuth2 in 8 Steps" in the sidebar
