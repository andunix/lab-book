# Homebrew

- Von [https://github.com/Homebrew/homebrew-cask/issues/58046](https://github.com/Homebrew/homebrew-cask/issues/58046):

If you get an error of the type Error: Cask 'hex-fiend-beta' definition is invalid: invalid 'depends_on macos' value: ":lion", where hex-fiend-beta can be any cask name, and :lion any macOS release name, run the following command:

```sh
/usr/bin/find "$(brew --prefix)/Caskroom/"*'/.metadata' -type f -name '*.rb' -print0 | /usr/bin/xargs -0 /usr/bin/perl -i -pe 's/depends_on macos: \[.*?\]//gsm;s/depends_on macos: .*//g'
```

This will remove all depends_on macos references of installed casks (where it doesn’t matter anymore anyway).
