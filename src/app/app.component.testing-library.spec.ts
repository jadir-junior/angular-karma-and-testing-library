import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import userEvent from '@testing-library/user-event';

describe('Testing library Form', () => {
  const { getByLabelText, getByText } = screen;
  const setup = () => {
    return render(AppComponent, {
      imports: [ReactiveFormsModule],
    });
  };

  it('should render a component with testing library', async () => {
    await setup();

    expect(getByLabelText('name')).toBeInTheDocument();
  });

  it('should show erro message required with testing library', async () => {
    const { fixture } = await setup();
    fixture.detectChanges();

    const input = getByLabelText('name');

    await userEvent.click(input);
    await userEvent.tab();

    console.log('COMMENT TO REFRESH');

    expect(getByText('Campo obrigatorio')).toBeInTheDocument();
  });
});
