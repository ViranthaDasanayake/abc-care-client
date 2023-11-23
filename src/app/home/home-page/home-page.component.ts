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
  carouselItems: any;
  services: any;
  programs: any;
  testimonials: any;
  responsiveOptions: any;
  displayDialog: boolean = false;
  pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/abccare.appspot.com/o/Virantha_Dasanayake_Resume.pdf?alt=media';

  constructor(
    private renderer: Renderer2
  ) {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.carouselItems = [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
        heading: 'Welcome to',
        subHeading: 'ABC Care',
        text: 'ABC Care Private Limited, an English medium childcare provider, operates under Australian management, ensuring a high standard of childcare. We are located at Gangodawila, Nugegoda area a few hundred meters from the High-level Road.'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1929&q=80',
        heading: 'What we do',
        subHeading: 'ABC Care',
        text: 'At ABC Care Private Limited, we offer a range of services to meet your needs. We understand the unique needs of working parents and the importance of providing a safe, nurturing, and enriching environment for their children. To meet these needs, we offer 3 main areas of services.'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1544776193-32d404ae608a?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: 'What we do',
        subHeading: 'ABC Afterschool Care',
        text: 'ABC Afterschool Care service provides a safe and caring environment for your child after a school day until you pick up your child. Where needed, we provide homework assistance, so your child enjoys quality family time once they go home.'
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1588072432904-843af37f03ed?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: 'What we do',
        subHeading: 'ABC Vacation Care',
        text: 'ABC Vacation Care service ensures quality care with a variety of fun-filled activities. Special programs on music, drama, and painting will stimulate your child’s creativity.'
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: 'What we do',
        subHeading: 'ABC Preschool',
        text: 'At ABC Preschool, we provide an excellent foundation and a strong start for your child’s education journey, based on Australian curriculum.'
      }
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
        title: 'ABC Preschool: Building Strong Foundations Your Child',
        text: 'Our ABC Preschool program is designed to give your child a strong start in their educational journey in English medium. With a focus on early childhood development, we provide a nurturing and stimulating environment where children can learn, play, and grow. Our dedicated educators follow a comprehensive curriculum that fosters cognitive, social, and emotional development, ensuring that your child is well-prepared for their academic future.',
        imageUrl: 'https://images.unsplash.com/photo-1542000551557-3fd0ad0eb15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      },
      {
        color: '#FBCFFF',
        title: 'ABC Afterschool Care: Extending Support Beyond School Hours',
        text: 'Our ABC Afterschool care program will offer working parents’ peace of mind. We recognise the challenges of balancing work and family life and create a safe and structured environment for your child after their regular school day ends. Our trained staff will be there to assist with homework, engage in enriching activities, and ensure your child\'s well-being until you\'re ready to pick them up.',
        imageUrl: 'https://images.unsplash.com/photo-1509163245925-f4255dea7727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        color: '#C1FEA4',
        title: 'ABC Vacation Care: Fun and Learning During Holidays',
        text: 'We know school breaks can be a juggling act for parents. During school holidays and breaks, your child can continue to enjoy a supportive and stimulating atmosphere. We\'ve curated a program filled with exciting activities, educational outings, and opportunities for your child to explore their interests and creativity ensuring their vacation time is both enjoyable and productive.',
        imageUrl: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      },
      // {
      //   color: '#FFC0C0',
      //   title: 'Program 4',
      //   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
      //   imageUrl: 'https://plus.unsplash.com/premium_photo-1661963297627-92799f5658fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      // },
    ];

    this.testimonials = [
      {
        color: '#FFC0C0',
        title: 'Person 1',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      },
      {
        color: '#C1FEA4',
        title: 'Person 2',
        text: 'Lorem Ipsum is Lorem Ipsum is  Lorem Ipsum is Lorem Ipsum is  Lorem Ipsum is  Lorem Ipsum is Lorem Ipsum is  Lorem Ipsum is  Lorem Ipsum is  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/photo-1542000551557-3fd0ad0eb15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      },
      {
        color: '#AEFFFA',
        title: 'Person 3',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      },
      {
        color: '#AEFFFA',
        title: 'Person 4',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768;
  }

  scrollTo(sectionName: string) {
    const section = document.getElementById(sectionName);
    if (section) {
      const startTime = performance.now();
      const startPosition = window.pageYOffset;
      const targetPosition = section.offsetTop;
      const duration = 900;

      function scrollAnimation(currentTime: number) {
        const timeElapsed = currentTime - startTime;
        const scrollPosition = easeInOut(timeElapsed, startPosition, targetPosition - startPosition, duration);

        window.scrollTo(0, scrollPosition);

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      function easeInOut(t: number, b: number, c: number, d: number): number {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(scrollAnimation);
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

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }


  downloadPdf(): void {
    window.open(this.pdfUrl, '_blank');
  }
}
