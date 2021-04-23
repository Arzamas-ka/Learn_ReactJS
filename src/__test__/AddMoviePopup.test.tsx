import * as React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddMoviePopup from 'components/AddMoviePopup';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { movies } from 'reducers/movies';

const renderWithRedux = (
  component,
  { initialState = {}, store = createStore(movies, initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('<AddMoviePopup />', () => {
  beforeEach(() => {
    renderWithRedux(
      <AddMoviePopup
        hideAdd={jest.fn()}
        setIsActiveBackdrop={jest.fn()}
        hideCongratulations={() => {}}
        isShowingAdd={true}
      />,
    );
  });

  it('to be in the document', () => {
    const { container } = renderWithRedux(
      <AddMoviePopup
        hideAdd={() => {}}
        setIsActiveBackdrop={() => {}}
        hideCongratulations={() => {}}
        isShowingAdd={true}
      />,
    );

    expect(container).toBeInTheDocument();
  });

  // it('close on ESC', () => {
  //   const closeFn = jest.fn();

  //   const { container } = renderWithRedux(
  //     <AddMoviePopup
  //       hideAdd={() => {}}
  //       setIsActiveBackdrop={() => {}}
  //       hideCongratulations={() => {}}
  //       isShowingAdd={true}
  //     />,
  //   );

  //   fireEvent.keyDown(container, {
  //     key: 'Escape',
  //     code: 'Escape',
  //     keyCode: 27,
  //     charCode: 27,
  //   });
  //   expect(closeFn).toBeCalled();
  // });

  // it('close on icon', () => {
  //   const closeFn = jest.fn();

  //   fireEvent.click(screen.getByLabelText("button-close"));
  //   screen.debug();
  //   expect(closeFn).toBeCalled();
  // });

  it('Input "Title" to be in the document', () => {
    expect(screen.queryByPlaceholderText('Moana')).toBeInTheDocument();
  });

  it('Input "Title" get typing value', () => {
    const title = 'New Title';

    userEvent.type(screen.queryByPlaceholderText('Moana'), title);
    expect(screen.queryByPlaceholderText('Moana')).toHaveValue(title);
  });

  it('Element "Release Date" to be in the document', () => {
    expect(screen.getByLabelText('release')).toBeInTheDocument();
  });

  it('Input "Movie url" has initial value', () => {
    expect(screen.queryByPlaceholderText('Movie url here')).toHaveValue(
      'https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
    );
  });

  it('Input "Overview" get typing value', () => {
    const overview =
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.';

    userEvent.type(screen.queryByPlaceholderText('Overview here'), overview);
    expect(screen.queryByPlaceholderText('Overview here')).toHaveValue(
      overview,
    );
  });

  it('Input "Runtime" get typing value', () => {
    const runtime = '140';

    userEvent.type(screen.queryByPlaceholderText('Runtime here'), runtime);
    expect(screen.queryByPlaceholderText('Runtime here')).toHaveValue(runtime);
  });

  it('Element "Genres" to be in the document', () => {
    expect(screen.queryByPlaceholderText('Select Genre')).toBeInTheDocument();
  });

  it('Input "Genres" get typing value', () => {
    const genres = 'Comedy, Documentary';

    userEvent.type(screen.queryByPlaceholderText('Select Genre'), genres);
    expect(screen.queryByPlaceholderText('Select Genre')).toHaveValue(genres);
  });
});
