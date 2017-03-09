# Personal Website

[Visit my website](http://kirstenswanson.io/)

There were a lot of hurdles, and tearing down and re-building of my website. I learned a lot from building this and documented some of my discoveries in blog posts.

I learned how to implement [parallax scrolling](https://medium.com/@kswanie21/the-simplicity-of-parallax-82ff7896e43#.gkxginf1l). For the longest time I couldn't figure out why my hero image wasn't appearing on mobile and that's because the `background-attachment` can't be `fixed`, so it needs to be changed to `scroll` with a media query.

I purchased my first domain name. I had no idea how to use this domain name with my website. I only had it deployed to GitHub pages, but after research I was able to figure out how to redirect it to my purchased domain name. For anyone who is trying to use a GoDaddy domain with `gh-pages` I wrote out steps on how to do so [here](https://medium.com/@kswanie21/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b#.hhyp47g91).

I really stepped up my styling by using Sass. I immediately fell in love with Sass and how DRY it kept my code. Using Webpack with Sass was fantastic since it compiles all the styling for you. Once again I [documented my discoveries with Sass](https://medium.com/@kswanie21/gettin-sassy-3d0a9d84b2ee#.6pfx8q33f).

I included a couple jQuery plugins. The [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) for the lightbox gallery was easy to implement, especially since it was already built to be responsive. The [jQuery Easing plugin](http://gsgd.co.uk/sandbox/jquery/easing/) added a nice touch to scrolling with the header links.

There are many images in my portfolio, so to make my website faster I compressed all the images with [ImageOptim](https://imageoptim.com/mac).

Most of my images are saved as PNGs, but my social media icons are saved as SVGs. I learned that SVGs can be very customizable. [Sketch](https://www.sketchapp.com/) was a great tool in customizing SVGs.

I wanted to make sure my website was completely accessible for everyone, so I used the [Chrome DevTool aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) to test for accessibility issues.
