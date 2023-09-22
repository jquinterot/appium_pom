describe('Locating elements on Android :D', () => {
    it.only('Find element by  accesibility id', async () => {
        const appOption = await $('~Clicks');
        await appOption.click();
    })

    it('Find element by class name', async () => {
        //Find the first element with class TextView
        const className = await $('android.widget.TextView');
        console.log(await className.getText());
        await expect(className).toHaveText('Counter Clicks');
    })

    it('Find element by xpath', async () => {
        //Find the first element with class TextView
        const counterLabel = await $('//android.view.View[@content-desc="0"]');
        console.log(await counterLabel.getText());
        await expect(className).toHaveText(0);
    })
})