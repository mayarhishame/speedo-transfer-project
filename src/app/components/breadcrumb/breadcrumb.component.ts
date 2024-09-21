import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  currentUrl!: string;
  headerText: string = '';
  breadcrumbItems: { label: string; color: string }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute)
      )
      .subscribe((route) => {
        this.updateBreadcrumb(route.root);
        this.setHeaderText(route); // Set the header text based on the route
      });
  }

  updateBreadcrumb(route: ActivatedRoute) {
    this.currentUrl = this.router.url;
    this.breadcrumbItems = this.getBreadcrumbItems(route);
  }

  setHeaderText(route: ActivatedRoute) {
    const currentPath = route.snapshot.url[0]?.path;
    this.headerText =
      currentPath === 'profile' ? 'My Account' : 'Money Transfer';
  }

  getBreadcrumbItems(
    route: ActivatedRoute
  ): { label: string; color: string }[] {
    const items = [];
    let currentRoute: ActivatedRoute | null = route;

    while (currentRoute && currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    while (currentRoute) {
      if (currentRoute.snapshot.url.length) {
        const label = currentRoute.snapshot.url.map((u) => u.path).join('/');
        const color = this.getColorForLabel(label);
        items.unshift({ label, color });
      }
      currentRoute = currentRoute.parent;
    }

    return items;
  }

  getColorForLabel(label: string): string {
    switch (label) {
      case 'home':
        return 'green';
      case 'about':
        return 'blue';
      case 'amount':
        return 'red';
      default:
        return 'black';
    }
  }
}
