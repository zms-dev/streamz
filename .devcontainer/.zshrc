HISTFILE=/zsh_history/.zsh_history
ZSH_AUTOSUGGEST_USE_ASYNC="true"

source ~/antigen.zsh

antigen use oh-my-zsh

antigen bundle debian
antigen bundle gcloud
antigen bundle git
antigen bundle github
antigen bundle node
antigen bundle npm

antigen bundle zsh-users/zsh-completions
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-syntax-highlighting

antigen theme af-magic

antigen apply

zstyle ':completion:*' use-cache on
zstyle ':completion:*' cache-path ~/.zsh/cache