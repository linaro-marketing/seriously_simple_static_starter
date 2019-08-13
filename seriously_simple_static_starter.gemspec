# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "seriously_simple_static_starter"
  spec.version       = "0.6.3"
  spec.authors       = ["Kyle Kirkby"]
  spec.email         = ["kyle.kirkby@linaro.org"]
  spec.summary       = "The Seriously Simple Static Starter is a lightweight and optimsied Jekyll theme. This theme allows
    you to get your feet off the ground quickly with a modern Google pagespeed 100 out-of-the-box
    website template for 2019."
  spec.homepage      = "https://seriously-simple-static-starter.github.io/"
  spec.license       = "MIT"
  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }
#   spec.add_runtime_dependency "jekyll", "~> 4.0.0.pre.alpha1"
  spec.add_development_dependency "rake", "~> 12.0"
  spec.add_runtime_dependency 'jekyll', '~> 3.7.3'
#   spec.add_runtime_dependency 'bootstrap', '~> 4.3.1'
  spec.add_runtime_dependency "jekyll-assets", "2.4.0"
  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency "jekyll-4-picture-tag", "~> 1.0.1"
  spec.add_runtime_dependency 'jekyll-theme-assets-updated', '~> 1.1'
  spec.add_runtime_dependency 'autoprefixer-rails', ' 9.5.1.1'
end
