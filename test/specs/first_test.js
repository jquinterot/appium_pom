describe('Locating elements on Android :D', () => {
    it.only('Find element by  accesibility id, xpath and resource Id', async () => {
        //Accessibility Id

        const appOption = $('~App');
        //Xpath
        const alertDialogButton = $('//android.widget.TextView[@content-desc="Alert Dialogs"]');

        //By Resource Id
        const listDialog = $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');

        //Xpath
        const dropdownOption = $('//android.widget.TextView[@text="Command two"]');

        await appOption.click();
        await alertDialogButton.click();
        await listDialog.click();
        await dropdownOption.click();
        const textAssertion = $('//android.widget.TextView')
        await expect(await textAssertion).toHaveText("You selected: 1 , Command two");
    })
})