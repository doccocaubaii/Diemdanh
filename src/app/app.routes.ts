import { Routes } from '@angular/router';
import {DashBoard} from './dash-board/dash-board';
import {Member} from './member/member';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashBoard,
    title: 'Bảng điều khiển' // Tiêu đề hiển thị trên trình duyệt
  },
  {
    path: 'members',
    component: Member,
    title: 'Quản lý thành viên'
  },
  // {
  //   path: 'reports',
  //   component: ReportComponent,
  //   title: 'Báo cáo hệ thống'
  // },
  // Đường dẫn mặc định khi vừa mở app
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // Trang 404 nếu người dùng gõ sai URL (nên có)
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
