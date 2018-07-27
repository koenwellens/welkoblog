---
layout: main
title: '@wel_ko is writing'
---

<main class="home" id="post" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/Blog">
    <div id="grid" class="row flex-grid">
    {% for post in site.posts %}
      {% if post.blog contains 'writing' %}
        {% include post-tile.html %}
      {% endif %}
    {% endfor %}
    </div>
</main>
