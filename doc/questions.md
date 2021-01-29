# Caching

- What approach would you take? What libraries or services?

  As this is a small app and the only reasonable place to implement caching is in the resize of the assets I implemented a method to cache the results of that process.

  For this process I used a node package called memory-cache as it was really simple and straight forward to implement. I also thought about Nginx or redit but I thought those options were an overkill for this small, toy project.

  Apart from those options a CDN would be a good option is the app to build is big enough and is worth the effort. Even though a CDN is not technically a cache system, it could ease the serve of assets.
