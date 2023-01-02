Feature: Calcular Triangulo
    Para usuario, deseja calcular o tipo de triangulo conforme preenchimento de valores em cada lado

Scenario: Calculate triangle - Equilateral
Given I am on the Calcular Triangulo homepage
When I enter "3" in the first side
And I enter "3" in the second side
And I enter "3" in the third side
Then the message "Esse triângulo é do tipo:  equilátero" should be displayed
And the text "Equilátero" should be displayed in green

Scenario: Calculate triangle - Isosceles
Given I am on the Calcular Triangulo homepage
When I enter "3" in the first side
And I enter "3" in the second side
And I enter "2" in the third side
Then the message "Esse triângulo é do tipo:  isósceles" should be displayed
And the text "Isósceles" should be displayed in blue

Scenario: Calculate triangle - Scalene
Given I am on the Calcular Triangulo homepage
When I enter "3" in the first side
And I enter "2" in the second side
And I enter "1" in the third side
Then the message "Esse triângulo é do tipo:  escaleno" should be displayed
And the text "Escaleno" should be displayed in orange

Scenario: Did not enter values
Given I am on the Calcular Triangulo homepage
When I do not enter a value in the first side
And I do not enter a value in the second side
And I do not enter a value in the third side
Then the calculate button is disabled until the correct values are entered

Scenario: Typing letters
Given I am on the Calcular Triangulo homepage
When I try to enter "A" in a side
Then typing is not allowed

Scenario: Typing values less than or equal to zero
Given I am on the Calcular Triangulo homepage
When I try to enter a value less than or equal to zero in a side
Then typing a value less than or equal to zero is not allowed

Scenario: Changing content by letters
Given I am on the Calcular Triangulo homepage
And the three sides are correctly entered
When I try to change the content of a side by letters
Then changing the content by letters is not allowed

Scenario: Changing content by a value less than or equal to zero
Given I am on the Calcular Triangulo homepage
And the three sides are correctly entered
When I try to change the content of a side by a value less than or equal to zero
Then changing the content by a value less than or equal to zero is not allowed