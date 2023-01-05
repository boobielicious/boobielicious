## [1.6.2](https://github.com/boobielicious/boobielicious/compare/1.6.1...1.6.2) (2023-01-05)


### Bug Fixes

* **helm:** fixed host in wait-for-db ([3392d05](https://github.com/boobielicious/boobielicious/commit/3392d055c95587a9ff89cee8b31b92eb621b2dda))

## [1.6.1](https://github.com/boobielicious/boobielicious/compare/1.6.0...1.6.1) (2023-01-05)


### Bug Fixes

* **helm:** fixed redist host and replica count ([17a37a8](https://github.com/boobielicious/boobielicious/commit/17a37a81054b1098b757c36e5bf1ddc0f0f11503))

# [1.6.0](https://github.com/boobielicious/boobielicious/compare/1.5.0...1.6.0) (2023-01-05)


### Features

* added redis queue for background tasks ([3a53d44](https://github.com/boobielicious/boobielicious/commit/3a53d447ac18b90e3aa3ea17125e78d14256e2b6))

# [1.5.0](https://github.com/boobielicious/boobielicious/compare/1.4.5...1.5.0) (2023-01-03)


### Features

* added caching for data fetching ([fa2898c](https://github.com/boobielicious/boobielicious/commit/fa2898ce6dea07d4413c0690e0571c2395c9eb0c))
* added env variable for nzbget download category ([4617c45](https://github.com/boobielicious/boobielicious/commit/4617c45008b7519c7cc944c8b02ce117a7747cbe))
* added newznab download functionality ([deddc37](https://github.com/boobielicious/boobielicious/commit/deddc37f1a6df5aef29b6564829e225d18ec5194))

## [1.4.5](https://github.com/boobielicious/boobielicious/compare/1.4.4...1.4.5) (2023-01-03)


### Bug Fixes

* fixed bug in dockerfile ([93425cd](https://github.com/boobielicious/boobielicious/commit/93425cd3bb928eed3b3ca153db0802c98cdb732c))
* fixed start script ([6f21618](https://github.com/boobielicious/boobielicious/commit/6f21618190826a89cc4cfe3dcac6c2132660fa4e))

## [1.4.4](https://github.com/boobielicious/boobielicious/compare/1.4.3...1.4.4) (2023-01-03)


### Bug Fixes

* fixed prisma.schema in dockerfile ([de0f4a1](https://github.com/boobielicious/boobielicious/commit/de0f4a1c52e80ea333b0b43aa969f370c25b9afd))

## [1.4.3](https://github.com/boobielicious/boobielicious/compare/1.4.2...1.4.3) (2023-01-03)


### Bug Fixes

* fixed permissions for entrypoint ([f4a8bff](https://github.com/boobielicious/boobielicious/commit/f4a8bffa150fbabf7f1294661454f2198732abfd))

## [1.4.2](https://github.com/boobielicious/boobielicious/compare/1.4.1...1.4.2) (2023-01-03)


### Bug Fixes

* fixed permission in entrypoint.sh ([95417f5](https://github.com/boobielicious/boobielicious/commit/95417f586ff9c2e77ac35e387036a0a748f71185))

## [1.4.1](https://github.com/boobielicious/boobielicious/compare/1.4.0...1.4.1) (2023-01-03)


### Bug Fixes

* fixed entrypoint in dockerfile ([9579eeb](https://github.com/boobielicious/boobielicious/commit/9579eeb3fd6cd0e56c7e5612897c5ba1d3c3cbd2))

# [1.4.0](https://github.com/boobielicious/boobielicious/compare/1.3.1...1.4.0) (2023-01-03)


### Features

* added basic nzbhydra2 support ([774b812](https://github.com/boobielicious/boobielicious/commit/774b8128ada5623f2eaf07d4b361e05895e9d65c))
* added nzbhydra2 and prisma ([23b09ec](https://github.com/boobielicious/boobielicious/commit/23b09ec9c72456988587ecb34df7861856dd2bf2))

## [1.3.1](https://github.com/boobielicious/boobielicious/compare/1.3.0...1.3.1) (2022-12-31)


### Bug Fixes

* **helm:** removed sharp path ([8423cc5](https://github.com/boobielicious/boobielicious/commit/8423cc5af7b2dcd2b4cd9fe13209cf1874908464))

# [1.3.0](https://github.com/boobielicious/boobielicious/compare/1.2.0...1.3.0) (2022-12-31)


### Bug Fixes

* fixed border in popup on performer page ([c9b5b0e](https://github.com/boobielicious/boobielicious/commit/c9b5b0ed13f13aef5f124e75cf860c10a9130595))
* fixed image optimization issues with sharp ([a0b844a](https://github.com/boobielicious/boobielicious/commit/a0b844ada4a7a457cb3ee2eb6e3caede887f198f))
* **helm:** added env sharp path for image optimization ([d13b33d](https://github.com/boobielicious/boobielicious/commit/d13b33d04ee45522b19b90e1ed623e89715f2537))
* reverted outline in popup ([d7fa81b](https://github.com/boobielicious/boobielicious/commit/d7fa81bd128bf86fd072fd470689ed51df64a893))


### Features

* decreased revalidation time ([ec6c09d](https://github.com/boobielicious/boobielicious/commit/ec6c09d34f7661243f16f27a34ec7c9c07b741b6))

# [1.2.0](https://github.com/boobielicious/boobielicious/compare/1.1.0...1.2.0) (2022-12-30)


### Bug Fixes

* fixed border for images in safari ([63d116e](https://github.com/boobielicious/boobielicious/commit/63d116efcb60b74bf07294f5d48be005bf1208f4))
* fixed remote pattern image envs ([71be633](https://github.com/boobielicious/boobielicious/commit/71be63363e01e506c40cb5603601f8d0ba7f0bee))


### Features

* added priority flag for images above the fold ([44dfd1f](https://github.com/boobielicious/boobielicious/commit/44dfd1ffee36c944f50aff2d8199d4098b36a391))

# [1.1.0](https://github.com/boobielicious/boobielicious/compare/1.0.0...1.1.0) (2022-12-30)


### Bug Fixes

* added default values for remote image patterns ([8de0f06](https://github.com/boobielicious/boobielicious/commit/8de0f06f37e7a7ec5eafd90df711a8f2275f8793))


### Features

* added header ([bd1df5d](https://github.com/boobielicious/boobielicious/commit/bd1df5d99906f56cb47b621cca1af6ba9068cc3f))
* added performer overview ([3f32a8d](https://github.com/boobielicious/boobielicious/commit/3f32a8d5381fe3de8e51216363f26644611ef4a4))
* added performer page ([fd4d75e](https://github.com/boobielicious/boobielicious/commit/fd4d75ed2adc02bd35f3efda6a4d6eb7d65d8193))
* **helm:** added stash graphql api env ([2f4469b](https://github.com/boobielicious/boobielicious/commit/2f4469bc8d1d2fae575355d1cef9d61631be68e7))

# 1.0.0 (2022-12-28)


### Features

* initial release ([a56fb5b](https://github.com/boobielicious/boobielicious/commit/a56fb5b77d7dd831b58507ee80ff1386ab01eb78))
