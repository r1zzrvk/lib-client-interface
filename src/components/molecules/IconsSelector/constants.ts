import {
  faHome,
  faSearch,
  faUser as faUserSolid,
  IconDefinition,
  faTrashAlt as faTrashSolid,
  faCog,
  faSlidersH,
  faSignOutAlt,
  faBookmark as faBookmarkSolid,
  faAngleLeft,
  faAngleRight,
  faLayerGroup,
  faXmark,
  faCaretDown,
  faCaretUp,
  faCheck,
  faInfo,
} from '@fortawesome/free-solid-svg-icons'
import { faUser, faTrashAlt, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { TIcon } from '@types'

export const icons: Record<TIcon, IconDefinition> = {
  home_solid: faHome,
  search_solid: faSearch,
  user_solid: faUserSolid,
  trash_solid: faTrashSolid,
  settings_solid: faCog,
  sliders_solid: faSlidersH,
  exit_solid: faSignOutAlt,
  bookmark_solid: faBookmarkSolid,
  caretLeft_solid: faAngleLeft,
  caretRight_solid: faAngleRight,
  caretDown_solid: faCaretDown,
  caretUp_solid: faCaretUp,
  catalog_solid: faLayerGroup,
  cross_solid: faXmark,
  check_solid: faCheck,
  info_solid: faInfo,
  user_regular: faUser,
  trash_regular: faTrashAlt,
  bookmark_regular: faBookmark,
}
