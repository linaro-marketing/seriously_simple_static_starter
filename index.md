---
layout: page
title: A Seriously Simple Static Starter Jekyll Theme
description: >
    The Seriously Simple Static Starter is a lightweight and optimsied Jekyll theme. This theme allows
    you to get your feet off the ground quickly with a modern Google pagespeed 100 out-of-the-box
    website template for 2019.
keywords:  Jekyll Theme, PageSpeed 100, static website, gulpfile
header:
    showcase_image:
        alt: Alt tag
        path: /assets/images/demo-site.png
        # svg: true
    # image:
    #   path: /assets/images/marketing.jpg
    #   alt: Background image alt tag
    # background_color: "#000"
    # svg_header: true
    sections:
      - format: title
        title_content:
          size: h1
          text: A Seriously Simple Static Starter Jekyll Theme
          class: display-3 font-weight-bold text-left
      - format: text
        text_content:
          text: >
            The Seriously Simple Static Starter is a lightweight and optimsied Jekyll theme. This theme allows
            you to get your feet off the ground quickly with a modern Google pagespeed 100 out-of-the-box
            website template for 2019.
      - format: buttons
        buttons_content:
          - title: Get Started
            url: /get-started/
            icon: icon-github-circled
            style: btn-secondary
flow:
    - row: container_row
      sections:
        - format: feature_block
          feature_block_content:
            position: left
            type: image
            image_content_path: /assets/images/lkft_workflow.svg
            url: /about/
            image_content_is_svg: true
            image_content_style: homepage_animated_svg
            image_content_alt: Tech image alt tag
            title: Introducing Docker Entersliderprise 3.0
            highlight-text: >
                Seamlessly build and share any application — from legacy to what comes next — and securely run them anywhere.
            text: >
                Docker Enterprise is the easiest and fastest way to use containers and [Kubernetes](https://www.docker.com/products/kubernetes) at scale and delivers the fastest time to production for modern applications, securely running them from hybrid cloud to the edge.

                Over 750 enterprise organizations use Docker Enterprise for everything from modernizing traditional applications to [microservices](https://www.docker.com/solutions/microservices)and data science.
            buttons:
                - title: Explore Docker Products
                  url: /explore/
                  class: btn-primary
                - title: More Info
                  url: /more-info/
                  class: btn-secondary
    - row: container_row
      sections:
        - format: cards
          card_width: 3
          items:
            - title: Fast
              image:
                path: /assets/images/marketing.jpg
                alt: Card image alt tag
              text: >
                Some quick example text to build on the card title and make up the bulk of the card's content.
              buttons:
                - title: Go Somewhere
                  url: /get-started/
                  class: btn-primary
            - title: Lightweight
              image:
                  path: /assets/images/marketing.jpg
                  alt: Card image alt tag
              text: >
                Some quick example text to build on the card title and make up the bulk of the card's content.
              buttons:
                - title: Go Somewhere
                  url: /get-started/
                  class: btn-primary
            - title: Modern
              image:
                path: /assets/images/marketing.jpg
                alt: Card image alt tag
              text: >
                Some quick example text to build on the card title and make up the bulk of the card's content.
              buttons:
                - title: Go Somewhere
                  url: /get-started/
                  class: btn-primary
            - title: Modern
              image:
                  path: /assets/images/marketing.jpg
                  alt: Card image alt tag
              text: >
                Some quick example text to build on the card title and make up the bulk of the card's content.
              buttons:
                - title: Go Somewhere
                  url: /get-started/
                  class: btn-primary
    - row: container_row
      sections:
        - format: feature_block
          feature_block_content:
            position: right
            type: youtube_video
            video_content_url: https://www.youtube.com/watch?v=QH2-TGUlwu4
            title: A YouTube Video Feature Block
            highlight-text: >
                Simply add featured videos to your static site
            text: "
                Provide the URL to your YouTube video and let the theme do the rest!
                "
            buttons:
                - title: Get Started
                  url: /get-started/
                  class: btn-primary
                - title: View on Github
                  url: /more-info/
                  class: btn-secondary
                  icon: icon-github-circled
    - row: container_row
      sections:
        - format: feature_block
          feature_block_content:
            position: left
            type: slider
            slider_content:
                lightbox_enabled: true
                seconds_per_slide: 5
                nav: true
                dots: false
                xs_items: 1
                sm_items: 1
                md_items: 1
                lg_items: 1
                items:
                    - image: /assets/images/placeholder.jpg
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/placeholder.jpg
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/placeholder.jpg
                      alt: Background Image
                      title: Background Image 1
            title: A Slider Feature Block
            highlight-text: >
                This section features an owl carousel feature block.
            text: "
                You can customize:

                - Number of Items on different breakpoints

                - Toggle Nav

                - Slide Timeout

                - Lightbox on items


                All from your Jekyll frontmatter!
                "
            buttons:
                - title: Get Started
                  url: /get-started/
                  class: btn-primary
                - title: View on GitHub
                  url: https://github.com/linaro-marketing/seriously_simple_static_starter/wiki
                  class: btn-secondary
                  icon: icon-github-circled
---
**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
