#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# pylint:disable=inconsistent-return-statements


class IgnoreRawDecorator(object):
    """
    The `IgnoreRawDecorator` is a decorator to ignore raw/fixture data during signals handling.

    usage example:
        @receiver(post_save, sender=settings.AUTH_USER_MODEL)
        @ignore_raw
        def my_signal_handler(sender, instance=None, created=False, **kwargs):
            ...
            return ...
    """

    def __init__(self, f):
        self.f = f

    def __call__(self, *args, **kwargs):
        if kwargs.get("raw"):
            # Ignore signal handling for fixture loading
            return

        return self.f(*args, **kwargs)


class IgnoreUpdatesDecorator(object):
    """
    The `IgnoreUpdatesDecorator` is a decorator to ignore signals for updates.

    usage example:
        @receiver(post_save, sender=settings.AUTH_USER_MODEL)
        @ignore_updates
        @ignore_raw
        def my_signal_handler(sender, instance=None, created=False, **kwargs):
            ...
            return ...
    """

    def __init__(self, f):
        self.f = f

    def __call__(self, *args, **kwargs):
        if not kwargs.get("created", False):
            # Ignore signal handling for updates
            return

        return self.f(*args, **kwargs)


class IgnoreUpdatesPreDecorator(object):
    """
    The `IgnoreUpdatesPreDecorator` is a decorator to ignore signals for updates.

    usage example:
        @receiver(post_save, sender=settings.AUTH_USER_MODEL)
        @ignore_updates_pre
        @ignore_raw
        def my_signal_handler(sender, instance=None, created=False, **kwargs):
            ...
            return ...
    """

    def __init__(self, f):
        self.f = f

    def __call__(self, *args, **kwargs):
        if kwargs["instance"].pk:
            # Ignore signal handling for updates
            return

        return self.f(*args, **kwargs)


class CheckSpecificationDecorator(object):
    """
    The `CheckSpecificationDecorator` is a decorator to check if an instance has a specification.

    usage example:
        @receiver(post_save, sender=settings.AUTH_USER_MODEL)
        @ignore_updates_pre
        @check_specification
        @ignore_raw
        def my_signal_handler(sender, instance=None, created=False, **kwargs):
            ...
            return ...
    """

    def __init__(self, f):
        self.f = f

    def __call__(self, *args, **kwargs):
        if not kwargs["instance"].specification:
            # Ignore signal handling for instance without specification
            return

        return self.f(*args, **kwargs)


ignore_raw = IgnoreRawDecorator
ignore_updates = IgnoreUpdatesDecorator
ignore_updates_pre = IgnoreUpdatesPreDecorator
check_specification = CheckSpecificationDecorator
