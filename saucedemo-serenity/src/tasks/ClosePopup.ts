import { Task, Duration, Check, Wait } from '@serenity-js/core';
import { PageElement, By, Click, isVisible } from '@serenity-js/web';

export class ClosePopup {
  static ifPresent = () =>
    Task.where(`#actor closes popup if present`,
      Check.whether(
        PageElement.located(By.css('.modal, .popup, .overlay')),
        isVisible()
      ).andIfSo(
        Click.on(
          PageElement.located(
            By.css('.modal button, .popup button, .overlay button, .close')
          )
        )
      ),
      Wait.for(Duration.ofSeconds(1))
    );
}