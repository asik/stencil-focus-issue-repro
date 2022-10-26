import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'input-wrapper',
  shadow: {
    delegatesFocus: true,
  },
})
export class InputWrapper {
  /**
   * Disabled
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <Host role="textbox" contenteditable="true">
        <input disabled={this.disabled}/>
      </Host>
    );
  }
}
