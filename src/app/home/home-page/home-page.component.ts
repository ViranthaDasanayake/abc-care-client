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
  services: any;
  programs: any;

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

    this.services = [
      {
        color: '#FFC0C0',
        title: 'Title',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      },
      {
        color: '#C1FEA4',
        title: 'Title',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/photo-1542000551557-3fd0ad0eb15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      },
      {
        color: '#AEFFFA',
        title: 'Title',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      },
      {
        color: '#FBCFFF',
        title: 'Title',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661963297627-92799f5658fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
    ];

    this.programs = [
      {
        color: '#AEFFFA',
        title: 'Program 1',
        text: 'Lorem Ipsum Lorem Ipsum Lorem  Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/photo-1542000551557-3fd0ad0eb15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      },
      {
        color: '#FBCFFF',
        title: 'Program 2',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/photo-1509163245925-f4255dea7727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        color: '#C1FEA4',
        title: 'Program 3',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      },
      {
        color: '#FFC0C0',
        title: 'Program 4',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661963297627-92799f5658fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
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
