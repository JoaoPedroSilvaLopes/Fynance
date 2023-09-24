using FluentValidation.Results;

namespace GLBViewerAPI.Application.Notifications;

public class Notificator : INotificator
{
    private readonly List<string> _errorMessages;
    private bool _notFoundResourse;

    public bool HasNotification => _errorMessages.Any();
    public bool IsNotFoundResourse => _notFoundResourse;
    
    public Notificator()
    {
        _errorMessages = new List<string>();
    }
    
    public void Handle(List<ValidationFailure> failures)
    {
        failures.ForEach(error => Handle(error.ErrorMessage));
    }
    
    public void Handle(string message)
    {
        if (_notFoundResourse)
            throw new InvalidOperationException("Não é possível chamar o Handle quando for NotFoundResourse!");
        
        _errorMessages.Add(message);
    }

    public void HandleNotFoundResourse()
    {
        if (HasNotification)
            throw new InvalidOperationException("Não é possível chamar o um HandleNotFoundResource quando for Handle!");
        
        _notFoundResourse = true;
    }

    public IEnumerable<string> GetNotifications() => _errorMessages;
}