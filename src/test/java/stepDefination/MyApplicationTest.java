package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyApplicationTest {
	public static WebDriver driver;
	//Scenario scenario;
	
	/*@Before("@newUser,@user")
	public void testSetup(Scenario scenario) throws InterruptedException {
		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\bijay\\Desktop\\Workspace\\chromedriver_win32\\chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
		   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		 System.out.println("Executing scenario" + scenario.getName());
	}*/
	
	/*@After("@newUser,@user")
	public void tearDown(Scenario scenario){
		scenario.write("Finished Scenario");
		if(scenario.isFailed()){
			scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES), "Image.png"	);
		}
		System.out.println("Test Environment destroyed");
		driver.close();
		driver.quit();
	}*/
	 
	@Given("^Open chrome and start application$")
	public void open_chrome_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\bijay\\Desktop\\Workspace\\chromedriver_win32\\chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
		   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		   driver.get("http://automationpractice.com/index.php?");
		  Thread.sleep(20000);
		  System.out.println("URL Launched");
		  System.out.println("Checking Git Repo");
	}

	@When("^user clicks on signin$")
	public void user_clicks_on_signin() throws Throwable {
		
	    driver.findElement(By.xpath("//div/a[contains(@class,'login')]")).click();
	    Thread.sleep(20000);
	}
	
	@Then("^user enters user$")
	public void user_enters_user() throws Throwable {
		 String emailID = "test." + System.currentTimeMillis()+"@gmail.com";//getValuesFromExcel("Sheet1", 1, 0);
		 if(driver.findElement(By.xpath("//div/form/h3[contains(text(),'Create an account')]")).isDisplayed()&& 
				 driver.findElement(By.xpath("//div/input[contains(@type,'text')]")).isDisplayed()) {
			 driver.findElement(By.xpath("//div/input[contains(@type,'text')]")).sendKeys(emailID);
				 Thread.sleep(5000);
			 } else {
				 System.out.println("fields are not present");
			 }
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
		driver.findElement(By.xpath("//button/span/i[contains(@class,'icon-user left')]")).click();
		 Thread.sleep(20000);
	}

	@Given("^user is on personal information page$")
	public void user_is_on_personal_information_page() throws Throwable {
		driver.findElement(By.xpath("//div/h3[contains(text(),'Your personal information')]")).isDisplayed();
	}

	@When("^user enters valid gender$")
	public void user_enters_valid_gender() throws Throwable {
		driver.findElement(By.xpath("//div/label[contains(@for,'id_gender2')]")).isDisplayed();
	}
	
	@When("^user enters valid fname \"([^\"]*)\"$")
	public void user_enters_valid_fname(String fName) throws Throwable {
		driver.findElement(By.xpath("//div/input[contains(@id,'customer_firstname')]")).sendKeys(fName);
	}

	@When("^user enters valid lname \"([^\"]*)\"$")
	public void user_enters_valid_lname(String lName) throws Throwable {
		driver.findElement(By.xpath("//div/input[contains(@id,'customer_lastname')]")).sendKeys(lName);
	}

	@When("^user enters valid \"([^\"]*)\"$")
	public void user_enters_valid(String password) throws Throwable {
		driver.findElement(By.xpath("//div/input[contains(@id,'passwd')]")).sendKeys(password);
	}

	@When("^user selects \"([^\"]*)\" in day drop down$")
	public void user_selects_in_day_drop_down(String day) throws Throwable {
		 WebElement ele = driver.findElement(By.xpath("//select[contains(@id,'days')]"));
		 Select s1 = new Select(ele);
		 s1.selectByValue(day);
		 System.out.println("Date month year selected as" + " " + day);
	}

	@When("^user selects \"([^\"]*)\" in month drop down$")
	public void user_selects_in_month_drop_down(String month) throws Throwable {
		 WebElement ele2 = driver.findElement(By.xpath("//select[contains(@id,'months')]"));
		 Select s2 = new Select(ele2);
		 s2.selectByValue(month);
		 System.out.println("Date month year selected as" + " " + month);
	}

	@When("^user selects \"([^\"]*)\" in year drop down$")
	public void user_selects_in_year_drop_down(String year) throws Throwable {
		 WebElement ele3 = driver.findElement(By.xpath("//select[contains(@id,'years')]"));
		 Select s3= new Select(ele3);
		 s3.selectByValue(year);
		 System.out.println("Date month year selected as" + " " + year);
	}

	@When("^user enters fname \"([^\"]*)\"$")
	public void user_enters_fname(String fName) throws Throwable {
		driver.findElement(By.xpath("//p/input[contains(@id,'firstname')]")).sendKeys(fName);
	} 
	@When("^user enters lname \"([^\"]*)\"$")
	public void user_enters_lname(String lName) throws Throwable {
		driver.findElement(By.xpath("//p/input[contains(@id,'lastname')]")).sendKeys(lName);
	}

	@When("^user enters comp \"([^\"]*)\"$")
	public void user_enters_comp(String company) throws Throwable {
		driver.findElement(By.xpath("//p/input[contains(@id,'company')]")).sendKeys(company);
	}

	@When("^user enters \"([^\"]*)\" in address(\\d+)$")
	public void user_enters_in_address(String add1, int add2) throws Throwable {
		 
		driver.findElement(By.xpath("//p/input[contains(@id,'address1')]")).sendKeys(add1);
	}

	@When("^user enters \"([^\"]*)\" in city$")
	public void user_enters_in_city(String city) throws Throwable {
		driver.findElement(By.xpath("//p/input[contains(@id,'city')]")).sendKeys(city);
	}

	@When("^user enters \"([^\"]*)\" in state$")
	public void user_enters_in_state(String state) throws Throwable {
		WebElement ele4 = driver.findElement(By.xpath("//select[contains(@id,'id_state')]"));
		 Select sl4 = new Select(ele4);
		 sl4.selectByValue(state);
		 System.out.println("State selected as" + " " + state);
	}

	@When("^user enters \"([^\"]*)\" in zip$")
	public void user_enters_in_zip(String zip) throws Throwable {
		driver.findElement(By.xpath("//p/input[contains(@id,'postcode')]")).sendKeys(zip);
	}

	@When("^user enters \"([^\"]*)\" in phone number$")
	public void user_enters_in_phone_number(String mPhone) throws Throwable {
		driver.findElement(By.xpath("//p/input[contains(@id,'phone_mobile')]")).sendKeys(mPhone);
	}

	@When("^user enters \"([^\"]*)\" in alias$")
	public void user_enters_in_alias(String alias) throws Throwable {
		driver.findElement(By.xpath("//p/input[contains(@id,'alias')]")).clear();
				driver.findElement(By.xpath("//p/input[contains(@id,'alias')]")).sendKeys(alias);
	}

	@Then("^user should be able to register successfully$")
	public void user_should_be_able_to_register_successfully() throws Throwable {
		driver.findElement(By.xpath("//button[contains(@id,'submitAccount')]")).click();
		 Thread.sleep(5000);
		 driver.quit();
	}
	
	
}
