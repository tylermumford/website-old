---
layout: default
title: Posts
---

## Posts

{% for post in site.posts %}
### [{{ post.title }}]({{ site.url }} {{ post.url }})
{% endfor %}

As you can see, the current number of posts approaches 0.
