import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('mobileMenuIcon') mobileMenuIcon!: ElementRef;
  @ViewChild('mobileMenuPanel') mobileMenuPanel!: ElementRef;
  mobileMenuVisible: boolean = false;
  isMobile: boolean = false;
  responsiveOptions: any[] | undefined;
  carouselItems: any;

  constructor(
    private renderer: Renderer2
  ) {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.carouselItems = [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
        heading: 'Welcome to',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod tristique. Vivamus non augue nec ligula tincidunt dignissim. Integer nec tincidunt urna, sit amet malesuada ligula. Nullam dignissim libero id lectus interdum, nec feugiat libero volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1588072432733-2b6a4873b187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
        heading: 'Who we are',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod tristique. Vivamus non augue nec ligula tincidunt dignissim. Integer nec tincidunt urna, sit amet malesuada ligula. Nullam dignissim libero id lectus interdum, nec feugiat libero volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1929&q=80',
        heading: 'What we do',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod tristique. Vivamus non augue nec ligula tincidunt dignissim. Integer nec tincidunt urna, sit amet malesuada ligula. Nullam dignissim libero id lectus interdum, nec feugiat libero volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'
      },
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768;
  }

  scrollTo(sectionName: string) {
    const section = document.getElementById(sectionName);
    if (section) {
      this.renderer.setProperty(document.documentElement, 'scrollTop', section.offsetTop - 0);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;

    if (this.mobileMenuVisible) {
      // Add click event listener to close the mobile menu panel when clicking outside
      this.renderer.listen('document', 'click', (event: Event) => {
        if (this.mobileMenuPanel.nativeElement && !this.mobileMenuPanel.nativeElement.contains(event.target) && !this.mobileMenuIcon.nativeElement.contains(event.target)) {
          this.mobileMenuVisible = false;
        }
      });
    }
  }

  closeMobileMenuOnClick() {
    this.mobileMenuVisible = false;
  }

  isEven(item: any) {
    return item.id % 2 === 0;
  }
}
