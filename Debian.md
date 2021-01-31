# Debian

## Package Info

Version eines Pakets nachsehen (hier: `dovecot`):
```
dpkg --list | grep dovecot
```

## Cleanup Packages
### Purge uninstalled Packages

If a package is removed, it is only uninstalled, but the configuration remains on the system. This is a good thing, as you are able to reinstall the package and have it configured with the old configuration. But if you want to cleanup this old stuff, you can ge a list of uninstalled (but not purged) packages with this command:

```
dpkg --get-selections | grep 'deinstall$'
```

You can feed this list directly to apt to purge the packages:

```
apt purge $(dpkg --get-selections | grep 'deinstall$' | cut -f1)
```

### Remove Orphans

If a packages is installed, all its dependencies are also automatically installed. If the selected package is removed or the dependencies change, there can be left over packages. deborphan is an utility which searches for automatically installed but leftover packages.

First, you have to install deborpan:

```
apt install deborphan
```

Then you can get the list of orphans:

```
deborphan
```

If you want, you can even more suggestions for packages to remove:

```
deborphan --help

Usage: deborphan [OPTIONS] [PACKAGE]...

The following options are available:
--help,           -h        This help.
--status-file,    -f FILE   Use FILE as statusfile.
--version,        -v        Version information.
--show-deps,      -d        Show dependencies for packages that have them.
--show-priority,  -P        Show priority of packages found.
--show-section,   -s        Show the sections the packages are in.
--no-show-section           Do not show sections.
--show-size,      -z        Show installed size of packages found.
--all-packages,   -a        Compare all packages, not just libs.
--exclude,        -e LIST   Work as if packages in LIST were not installed.
--force-hold,     -H        Ignore hold flags.
--nice-mode,      -n        Disable checks for `recommends' and `suggests'.
--ignore-recommends         Disable checks for `recommends'.
--ignore-suggests           Disable checks for `suggests'.
--priority,       -p PRIOR  Select only packages with priority >= PRIOR.
--find-config               Find "orphaned" configuration files.
--libdevel                  Search in libdevel in addition to libs and oldlibs.
--add-keep,       -A PKGS.. Never report PKGS.
--keep-file,      -k FILE   Use FILE to get/store info about kept packages.
--list-keep,      -L        List the packages that are never reported.
--del-keep,       -R PKGS.. Remove PKGS from the "keep" file.
--zero-keep,      -Z        Remove all packages from the "keep" file.
--guess-common              Try to report common packages.
--guess-data                Try to report data packages.
--guess-debug               Try to report debugging libraries.
--guess-dev                 Try to report development packages.
--guess-doc                 Try to report documentation packages.
--guess-dummy               Try to report dummy packages.
--guess-kernel              Try to report kernel modules.
--guess-interpreters        Try to report interpreter libraries.
--guess-mono                Try to report mono libraries.
--guess-perl                Try to report perl libraries.
--guess-pike                Try to report pike libraries.
--guess-python              Try to report python libraries.
--guess-ruby                Try to report ruby libraries.
--guess-section             Try to report libraries in wrong sections.
--guess-all                 Try all of the above.
--guess-only                Use --guess options only.

See also: deborphan(1), orphaner(8)
Report bugs to: Carsten Hey <c.hey@web.de>
```

I'm using the –guess-all option which lists all orphans which deborphan can find:

```
deborphan --guess-all
```

You can feed this list directly to apt to purge the packages:

```
apt purge $(deborphan --guess-all)
```
