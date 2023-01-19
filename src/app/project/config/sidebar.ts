import { SideBarLink } from '@trungk18/interface/ui-model/nav-link';
export const SideBarLinks = [
  new SideBarLink('Tableau de board', 'report', 'dashboard'),
  new SideBarLink('Tableau kanban', 'board', 'board'),
  new SideBarLink('Gestion utilisateurs','page', 'users'),
  new SideBarLink('Gestion projects', 'page', ''),
  new SideBarLink('Gestion incidents', 'page', ''),
  /*new SideBarLink('Issues and filters', 'filters'),
  new SideBarLink('Pages', 'page'),
  new SideBarLink('Reports', 'report'),
  new SideBarLink('Components', 'component'), */
  new SideBarLink('Parametre Projet', 'cog', 'settings'),
];
