# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "seriously_simple_static_starter"
  spec.version       = "0.1.0"
  spec.authors       = ["Kyle Kirkby"]
  spec.email         = ["kyle.kirkby@linaro.org"]

  spec.summary       = "The Seriously Simple Static Starter is a lightweight and optimsied Jekyll theme. This theme allows
    you to get your feet off the ground quickly with a modern Google pagespeed 100 out-of-the-box
    website template for 2019."
  spec.homepage      = "https://seriously-simple-static-starter.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

#   spec.add_runtime_dependency "jekyll", "~> 4.0.0.pre.alpha1"
  spec.add_runtime_dependency "jekyll", "3.8.5"
  spec.add_development_dependency "bundler", "~> 2"
  spec.add_development_dependency "rake", "~> 12.0"
  spec.add_development_dependency 'bootstrap', '~> 4.0.0.alpha3'
  spec.add_development_dependency "jekyll-picture-tag", "~> 1.3.0"
end
