import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'breadcrum',
    loadChildren: () => import('./pages/breadcrum/breadcrum.module').then( m => m.BreadcrumPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./pages/icons/icons.module').then( m => m.IconsPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'toolbar',
    loadChildren: () => import('./pages/toolbar/toolbar.module').then( m => m.ToolbarPageModule)
  },
  {
    path: 'floating',
    loadChildren: () => import('./pages/floating/floating.module').then( m => m.FloatingPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'infinite',
    loadChildren: () => import('./pages/infinite/infinite.module').then( m => m.InfinitePageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./pages/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./pages/media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'typography',
    loadChildren: () => import('./pages/typography/typography.module').then( m => m.TypographyPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./pages/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'reoder',
    loadChildren: () => import('./pages/reoder/reoder.module').then( m => m.ReoderPageModule)
  }
  ,
  {
    path: 'range',
    loadChildren: () => import('./page/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'reoder',
    loadChildren: () => import('./page/reoder/reoder.module').then( m => m.ReoderPageModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./page/routing/routing.module').then( m => m.RoutingPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./page/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./page/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./page/refresher/refresher.module').then( m => m.RefresherPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
