/// <reference path="./steps.d.ts" />

Feature("Test GitHub access");

Scenario("Test access monitoring repository", I => {
  I.amOnPage("https://github.com");
  I.see("GitHub");
  I.fillField("Search GitHub", "szatyinadam");
  I.pressKey("Enter");
  I.waitForText("We couldn’t find any repositories matching 'szatyinadam'");
  I.click("Users");
  I.waitForText("Adam Szatyin");
  I.click("szatyinadam");
  I.waitForText("monitoring", 3);
  I.click("monitoring");
  I.waitForText("grafana", 2);
  I.seeTitleEquals(
    "GitHub - szatyinadam/monitoring: Demo monitoring stack with Grafana, Prometheus, Docker, Spring Boot, Micrometer, MySQL."
  );
  I.see("grafana");
});
