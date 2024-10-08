import { EProfileTabs } from '@types'

/* eslint-disable quotes */
export const PROMO_FOOTER = {
  header: 'Google authorization',
  content:
    'Sign in quickly and effortlessly with Google Sign In.\nNo need to remember multiple usernames and passwords',
  buttonText: 'Sign in',
}

export const PROMO_BANNER = {
  header: 'Create your own book collections',
  content:
    'Simply search for a book and then click the «Add to list» button to add it to your personal collection. You can create multiple collections for different genres or reading moods and easily access them anytime. Start exploring and building your own book collections today!',
}

export const CATEGORIES_BANNER = {
  header: "Genres to cater to every reader's preference",
  subheader:
    'From romance to horror, self-help to autobiography,\nand travel to science fiction, we aim to provide something for everyone.',
  text: 'Whether you are into classic literature or contemporary bestsellers, poetry or cookbooks,\nour collection of genres ensures a diverse range of reading options.',
}

export const PROFILE_MENU = [
  { id: '1', title: EProfileTabs.PERSONAL },
  { id: '2', title: EProfileTabs.ACCOUNT },
  { id: '3', title: EProfileTabs.LISTS },
]

export const SERVER_ERROR = {
  title: 'Sorry, something went wrong!',
  altText: 'server error',
  imgUrl: '/503error.png',
  subtitle: 'Please try again later or contact us.\nThank you for your patience.',
}

export const NOTHING_FOUND = {
  title: 'Your search did not match\nany results',
  altText: 'nothing found',
  imgUrl: '/nothingfound.png',
  subtitle: 'Try again or change filters',
}

export const STARTING_SEARCH = {
  title: 'Your search results will be here',
  altText: 'starting a search',
  imgUrl: '/emptylist.png',
  subtitle: "Find what you're looking for with ease!",
}

export const EMPTY_BOOKMARKS = {
  title: 'This list is empty',
  altText: 'list empty',
  imgUrl: '/emptylist.png',
  subtitle: 'Go to catalog to add some books to this list',
}

export const NO_AUTH = {
  title: 'Here will be your lists',
  altText: 'No auth',
  imgUrl: '/emptylist.png',
  subtitle: 'Log in to add lists and bookmarks',
}

export const NO_LISTS = {
  title: 'Nothing found!',
  altText: 'list is empty',
  imgUrl: '/nothingfound.png',
  subtitle: "You don't have any lists yet",
}

export const NO_CREATED_LISTS = {
  title: 'Created lists not found!',
  altText: 'Created lists is empty',
  imgUrl: '/nothingfound.png',
  subtitle: "You don't have any lists yet",
}

export const LIST_FOR_AUTHED_USERS = {
  title: 'Sign in to access your lists',
  altText: 'No auth',
  imgUrl: '/nothingfound.png',
  subtitle: 'Start managing and enjoying your saved lists',
}
