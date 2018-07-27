---
layout: main
title: Reading with @wel_ko
---
<main class="home" id="post" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/Blog">
    <div id="grid" class="row flex-grid">
    {% for post in site.posts %}
      {% if post.blog contains 'reading' %}
        {% include post-tile.html %}
      {% endif %}
    {% endfor %}
    </div>
</main>
